function solution(name, yearning, photo) {
    return photo.map((group) => 
        group.reduce((sum, person) => {
            const idx = name.indexOf(person);
            return idx !== -1 ? sum + yearning[idx] : sum;
        }, 0)
    );
}

