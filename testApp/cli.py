# cli.py
from user_input import get_liked_songs
from recommendations import recommend_songs

def main():
    print("Welcome to MelodyMix - Personalized Playlists for Your Ears")
    print("---------------------------------------------------------")

    liked_songs = get_liked_songs()
    recommendations = recommend_songs(liked_songs)

    print("\nRecommended Songs:")
    for song in recommendations:
        print(f"{song['title']} by {song['artist']} ({song['genre']}, {song['tempo']})")

if __name__ == "__main__":
    main()
