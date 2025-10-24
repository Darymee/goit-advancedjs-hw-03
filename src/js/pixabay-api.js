const API_BASE = 'https://pixabay.com/api/';
const API_KEY = '29734791-3fd561d0afce25ff9315d455c';

console.log('Pixabay key:', import.meta.env);

export function fetchPixabayImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${API_BASE}?${params.toString()}`;

  return fetch(url).then(res => {
    console.log(res);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
}
