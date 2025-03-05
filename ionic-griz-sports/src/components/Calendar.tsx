import './Calendar.css';

import {
    CalendarNav,
    CalendarNext,
    CalendarPrev,
    CalendarToday,
    Eventcalendar,
    formatDate,
    Input,
    MbscCalendarEvent,
    MbscEventcalendarView,
    MbscEventClickEvent,
    MbscPageLoadingEvent,
    Popup,
    setOptions,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';

setOptions({
    theme: 'ios',
    themeVariant: 'light',
});



const Calendar: FC = () => {

    const [calEvents, setCalEvents] = useState<MbscCalendarEvent[]>([]);
    const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
    const [listEvents, setListEvents] = useState<MbscCalendarEvent[]>([]);
    const [searchInput, setSearchInput] = useState<HTMLInputElement>();
    const [selectedEvent, setSelectedEvent] = useState<MbscCalendarEvent[]>([]);




    const calInst = useRef<Eventcalendar | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const calView = useMemo<MbscEventcalendarView>(() => ({ calendar: { labels: true, popover: true } }), []);
    const listView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'year', size: 5 } }), []);

    const fetchEvents = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data as MbscCalendarEvent[];
    };

    const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        const searchText = ev.target.value;

        clearTimeout(timer.current);
        timer.current = setTimeout(async () => {
            if (searchText.length > 0) {
                const data = await fetchEvents('/events.json');
                const filteredEvents = data.filter((event: MbscCalendarEvent) =>
                    event.text && event.text.toLowerCase().includes(searchText.toLowerCase())
                );
                setListEvents(filteredEvents);
                setPopupOpen(true);
            } else {
                setPopupOpen(false);
            }
        }, 200);
    }, []);

    const handleInputFocus = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        if (ev.target.value.length > 0) {
            setPopupOpen(true);
        }
    }, []);

    const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
        formatDate('YYYY-MM-DD', args.viewStart!);
        formatDate('YYYY-MM-DD', args.viewEnd!);

        setTimeout(() => {
            fetch('events.json')
                .then(response => response.json())
                .then((data: MbscCalendarEvent[]) => {
                    setCalEvents(data);
                })
                .catch(error => console.error('Error fetching events:', error));
        });
    }, []);

    const handlePopupClose = useCallback(() => {
        setPopupOpen(false);
    }, []);

    const handleEventClick = useCallback((args: MbscEventClickEvent) => {
        setSelectedEvent([args.event]);
        setPopupOpen(false);
        calInst.current?.navigateToEvent(args.event);
    }, []);

    const searchInputRef = useCallback((input: Input) => {
        setSearchInput(input && (input.nativeElement as HTMLInputElement));
    }, []);

    const customHeader = useCallback(
        () => (
            <>
                <CalendarNav />
                <div className="mds-search-bar mbsc-flex-1-0">
                    <Input
                        autoComplete="off"
                        inputStyle="box"
                        placeholder="Search events"
                        startIcon="material-search"
                        ref={searchInputRef}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <CalendarPrev />
                <CalendarToday />
                <CalendarNext />
            </>
        ),
        [handleInputChange, handleInputFocus, searchInputRef],
    );

    return (
        <>
            <Eventcalendar
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                data={calEvents}
                ref={calInst}
                renderHeader={customHeader}
                selectedEvents={selectedEvent}
                selectMultipleEvents={true}
                view={calView}
                onPageLoading={handlePageLoading}
            />
            <Popup
                anchor={searchInput ?? undefined}
                contentPadding={false}
                display="anchored"
                focusElm={searchInput}
                focusOnOpen={false}
                focusOnClose={false}
                isOpen={isPopupOpen}
                scrollLock={false}
                showArrow={false}
                showOverlay={false}
                width={400}
                onClose={handlePopupClose}
            >
                <Eventcalendar
                    className="mds-search-results"
                    data={listEvents}
                    showControls={false}
                    view={listView}
                    onEventClick={handleEventClick}
                />
            </Popup>
        </>
    );
};

export default Calendar;