class Stage
    def initialize(attributes)
        @name = attributes.fetch(:name)
        @location = attributes.fetch(:location)
        @capacity = attributes.fetch(:capacity)
    end
end
