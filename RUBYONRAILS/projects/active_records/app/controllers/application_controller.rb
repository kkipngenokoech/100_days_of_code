class ApplicationController < ActionController::Base
    def hello
        render html: "Hello multiversers"
    end
end
