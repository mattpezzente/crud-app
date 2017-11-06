# React Project List

## Overview

This is a CRUD application that utilizes Create and Delete to create and store a list of projects that are user defined.

The application implements local storage to store user inputed project items for return visits. Anytime the user creates a new item, it will get added to local storage. When a user deletes an item, it is removed from the local storage, which is then updated.

When filling out the input fields, the only required field is the Title field. This uses the Validity API to validate an empty field, while blocking the ability to create a new project item.

## Installation