class Artist < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :galleries, through: :paintings
end
