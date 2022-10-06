[date and time](./ruby_codes/datetime.rb)
The Time class represents dates and times in Ruby. It is a thin layer over the system date and time functionality provided by the operating system.

we can use the time object to get various components of date and time
accessing the time class `time = Time.new`
1. get year of the date 
    -  `puts time.year`
2. get month of the date
    -  `puts time.month`
3. get day of the date
    -   `puts time.day`
4. get the day of week with sunday being day 0
    -  `puts time.wday`
5. get the day of the year
    -  `puts time.yday`
6. get time of the day in hour
    -  `puts time.hour`
7. get time in minutes
    -   `puts time.min`
8. get time in seconds
    -  `puts time.sec`
9. get time in microseconds
    -   `puts time.usec`
10. get timezone
    -  `puts time.zone`

## Time.utc, Time.gm, Time.local
