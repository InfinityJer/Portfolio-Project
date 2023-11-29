# recommendations.py
from songs_data import songs_data

def recommend_songs(liked_songs):
    liked_genres = set()
    for liked_song in liked_songs:
        for song in songs_data:
            if song["title"] == liked_song:
                liked_genres.add(song["genre"])

    recommended_songs = []
    for song in songs_data:
        if song["title"] not in liked_songs and song["genre"] in liked_genres:
            recommended_songs.append(song)

    return recommended_songs

if __name__ == "__main__":
    from user_input import get_liked_songs

    liked_songs = get_liked_songs()
    recommendations = recommend_songs(liked_songs)

    print("Recommended Songs:")
    for song in recommendations:
        print(f"{song['title']} by {song['artist']} ({song['genre']}, {song['tempo']})")
