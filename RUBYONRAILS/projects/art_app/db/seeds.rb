# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding the database.....'
Artist.destroy_all
Gallery.destroy_all
Painting.destroy_all

artiste1 = Artist.create(name: "Boniface Maina", age:31, experience_level:1000)
artiste2 = Artist.create(name: "Wendy Kariuki", age:32, experience_level:900)
artiste3 = Artist.create(name: "David Thuku", age: 38, experience_level:850)
artiste4 = Artist.create(name: "Joan Otieno", age:40, experience_level: 837)
artiste5 = Artist.create(name: "John Kariuki", age:27, experience_level:809)
artiste6 = Artist.create(name: "Lia Berhane", age: 28, experience_level: 799)

gallery1 = Gallery.create(name: "Brush Tu Art Studio", location: "Buruburu, Nairobi")
gallery2 = Gallery.create(name: "Dust Depot Art Studio", location: "Railways Art Gallery, Nairobi")
gallery3 = Gallery.create(name: "Railways Museum Art Studio", location: "Railways, Nairobi")
gallery4 = Gallery.create(name: "Ngecha Art Studio", location: "Ngecha, kenya")
gallery5 = Gallery.create(name: "Kopo Trust", location: "Nairobi, kenya")
gallery6 = Gallery.create(name: "Nala Art", location: "Nairobi, kenya")

5.times do |n|
    Painting.create(name: Faker::Name.name, price: Faker::Number.between(from:10000, to:100000), artist_id: Artist.ids.sample, gallery_id: Gallery.ids.sample)
end

puts 'seeding done'