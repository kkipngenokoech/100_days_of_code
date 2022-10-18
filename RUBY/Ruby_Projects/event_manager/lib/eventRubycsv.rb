#!usr/bin/ruby
require "csv"
require 'google/apis/civicinfo_v2'

civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

def cleanZipcodes (zipcode)
    zipcode.to_s
    if zipcode.nil?
        zipcode = '00000'
    elsif zipcode.length < 5
        ziplength = 5 - zipcode.length
        newzip = ''
        for index in 1..ziplength
            newzip += '0'
            index += 1
        end
        zipcode = newzip + zipcode
    elsif zipcode.length > 5
        zipcode = zipcode[0..4]
    else
        zipcode
    end
    #  zipcode.to_s.rjust(5, '0')[0..4] -  a shorter version of the above code.
end

puts "eventManager initialized....."

eventContents = CSV.open('event_attendees.csv', headers: true, header_converters: :symbol)

# accessing first name for attendees
eventContents.each do |row|
    state = row[-2]
    name = row[:first_name]
    zipcode = row[-1]
    # if zipcode.length < 5
    #     zipcode =zipcode.rjust(5,'0')
    # elsif zipcode.length > 5
    #     zipcode = zipcode[0..4]
    # end
    zipcode = cleanZipcodes(zipcode)
    begin
        legislators = civic_info.representative_info_by_address(
            address: zipcode,
            levels: 'country',
            roles: ['legislatorUpperBody', 'legislatorLowerBody']
        )
        legislators = legislators.officials
        
    rescue
        'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
    end

    puts "#{name}, #{state}, #{zipcode}, #{legislators}"
end

# accessing zip codes
eventContents.each do |zip|
    zipCode = zip[:zipcode]
    puts zipCode
end