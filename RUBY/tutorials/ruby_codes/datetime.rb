#!/usr/bin/ruby -w
time_now = Time.new
puts "current time is: #{time_now.inspect}"

# you can use both new and now.

time_now = Time.now
print "current time is: " << "#{time_now.inspect}\n"