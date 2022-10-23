class Artist < ApplicationRecord
    has_many :paintings, depedent: :destroy
    has_many :galleries, through: :paintings
end
