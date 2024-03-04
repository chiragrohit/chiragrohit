import json
from fastapi import HTTPException

def read_users_from_file():
    with open("users.json", "r") as file:
        users = json.load(file)
    return users

def getUsers():
    users = read_users_from_file()
    return users
def getUserById(userId):
    users = read_users_from_file()
    for user in users:
        if user["id"] == userId:
            print(user)
            return user
    raise HTTPException(status_code=404, detail="User not found")