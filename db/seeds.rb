# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board = Board.create(title: 'New Board')
list1 = List.create(title: 'List 1', board: board)
list2 = List.create(title: '2', board: board)
card1 = Card.create(
  title: "first card",
  list: list1,
  description: "some desc",
  labels: ["red", "yellow"]
)

card2 = Card.create(
  title: "second card",
  list: list1,
  description: "some desc",
  labels: ["red", "yellow"]
)

card3 = Card.create(
  title: "third card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"]
)
card4 = Card.create(
  title: "fourth card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"]
)
card5 = Card.create(
  title: "fifth card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"]
)
