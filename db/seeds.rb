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
Comment.destroy_all

board = Board.create(title: 'New Board')
list1 = List.create(title: 'List 1', board: board)
list2 = List.create(title: '2', board: board)
card1 = Card.create(
  title: "first card",
  list: list1,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 2.days.from_now,
  archived: false
)

comment1 = Comment.create(text: "First comment", card: card1)

card2 = Card.create(
  title: "second card",
  list: list1,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 4.days.from_now,
  archived: true
)

comment2 = Comment.create(text: "second comment", card: card2)
comment3 = Comment.create(text: "third comment", card: card2)

card3 = Card.create(
  title: "third card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 1.days.from_now,
  archived: false
)
card4 = Card.create(
  title: "fourth card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: -1.days.from_now,
  archived: false
)
card5 = Card.create(
  title: "fifth card",
  list: list2,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 0.days.from_now,
  archived: true
)


board2 = Board.create(title: 'Second Board')
list3 = List.create(title: 'List 3', board: board2)
list4 = List.create(title: '4', board: board2)
card6 = Card.create(
  title: "first card",
  list: list3,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 2.days.from_now,
  archived: false
)

comment4 = Comment.create(text: "nice", card: card6)

card7 = Card.create(
  title: "second card",
  list: list3,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 1.days.from_now,
  archived: false
)

card8 = Card.create(
  title: "third card",
  list: list4,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: -5.days.from_now,
  archived: false
)
card9 = Card.create(
  title: "fourth card",
  list: list4,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 10.days.from_now,
  archived: true
)
card10 = Card.create(
  title: "fifth card",
  list: list4,
  description: "some desc",
  labels: ["red", "yellow"],
  due_date: 7.days.from_now,
  archived: true
)
