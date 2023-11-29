# user_input.py

def get_liked_songs():
    liked_songs = input("Enter the titles of your liked songs (separated by commas): ")
    return [song.strip() for song in liked_songs.split(",")]

if __name__ == "__main__":
    liked_songs = get_liked_songs()
    print(f"You liked: {liked_songs}")
