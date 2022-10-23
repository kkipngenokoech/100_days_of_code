class Gallery < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :artists, through: :paintings
end
