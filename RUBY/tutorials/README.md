to run a ruby file: `ruby name_of_the_file.rb`
Ruby ignores white space characters and tabs.


Ruby interprets semicolons and newline characters as the ending of a statement. However, if Ruby encounters operators, such as +, −, or backslash at the end of a line, they indicate the continuation of a statement.

##  ruby identifiers
this include variables, constants and methods.  
they are case sensitive
ruby identifiers may include alphanumeric characters, and the underscore characters.

## Here document in ruby
if you want to write a paragaph or something in ruby
you use the 'here document technique:
"Here Document" refers to build strings from multiple lines. Following a << you can specify a string or an identifier to terminate the string literal, and all lines following the current line up to the terminator are the value of the string.
If the terminator is quoted, the type of quotes determines the type of the line-oriented string literal. Notice there must be no space between << and the terminator.
i.e 
```
prints <<EOF
a lot of blatant music
even more blatant music
EOF

#or
print <<"EOF";                # same as above
   This is the second way of creating
   here document ie. multiple line string.
EOF

print <<`EOC`                 # execute commands
	echo hi there
	echo lo there
EOC

print <<"foo", <<"bar"  # you can stack them
	I said foo.
foo
	I said bar.
bar
```

## [BEGIN SYNTAX](./ruby_codes/begin.rb)
this is the very first code that will be executed before the program code runs