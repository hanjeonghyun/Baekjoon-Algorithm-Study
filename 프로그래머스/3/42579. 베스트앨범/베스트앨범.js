function solution(genres, plays) {
    let genreTotal = new Map();
    let songList = new Map();
    let answer = [];
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        genreTotal.set(genre, (genreTotal.get(genre) || 0) + play);

        if (!songList.has(genre)) songList.set(genre, []);
        songList.get(genre).push([i, play]);
    }
    
    const sorted = [...genreTotal.entries()].sort((a, b) => b[1] - a[1]);
    
    for (const [genre] of sorted) {
        const songs = songList.get(genre);
        songs.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
        
        answer.push(...songs.slice(0, 2).map(s => s[0]));
    }
    
    return answer;
}