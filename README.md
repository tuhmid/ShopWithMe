
https://us04web.zoom.us/clips/share/BHVzMDQgNy9Ht9WfruIT4ecTuwsN45vB2J9UIzXkhXN0I-Nk1_8

# ShopWithMe
Welcome to ShopWithMe - a simple and interactive application that allows users to create, edit, and manage shopping lists collaboratively. With this app, you can access and edit your shopping list from anywhere as long as you have the link.

# Features
Create new shopping list items.
Update existing items, including their names and quantities.
Mark items as completed.
Reorder items within the list.
Delete items from the list.
Collaborative editing: Changes are instantly reflected for all users with the link.
Persistent data storage.

# Layout
The app's layout is user-friendly and provides the following elements:

A list of shopping items with columns for item name, quantity, completion status, and actions (edit and delete).
A button for adding new items to the shopping list.
Forms for creating and editing items with input fields for item name and quantity.

<img width="842" alt="Screen Shot 2023-10-22 at 11 13 20 AM" src="https://github.com/tuhmid/ShopWithMe/assets/144698175/26a66141-6aed-4c19-8744-f66cc8e1737f">

<img width="676" alt="Screen Shot 2023-10-22 at 11 05 24 AM" src="https://github.com/tuhmid/ShopWithMe/assets/144698175/3e053668-e317-4138-9328-0ea94fed5d6e">



# Functionality
When the page loads, the shopping list is displayed, reflecting the current state of the database.

Clicking the "Add Item" button allows you to add new shopping list items. The newly added items will appear both in the HTML display and the "database."

You can mark items as completed, edit their details, reorder them within the list, or delete them.

When editing an item, the form will appear pre-filled with the existing information for that item. Saving the form updates both the HTML display and the database.

Collaborative editing ensures that changes are instantly reflected for all users who have the link.

Created with Mongoose, MongoDB, Express, HTML, CSS, JS
