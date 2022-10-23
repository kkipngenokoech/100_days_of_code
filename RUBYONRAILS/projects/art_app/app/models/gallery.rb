class Gallery < ApplicationRecord
    has_many: :paintings, depedent: :destroy
    has_many: :artists, through: :paintings
end
