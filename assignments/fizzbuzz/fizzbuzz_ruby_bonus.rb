for i in 1..100
    div3 = ( i % 3 ).zero?
    div5 = ( i % 5 ).zero?
    div3_5 = ( i % 15 ).zero?
    if div3_5
      print "FizzBuzz"
    elsif div3
      print "Fizz" if div3
    elsif div5
      print "Buzz" if div5
    else
      print i
    end
    puts
end

