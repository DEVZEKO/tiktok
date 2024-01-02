const link = document.getElementById('link')
frame = document.getElementById('frame')
hide = document.getElementById('hide')
txt = document.getElementById('hideResult')
errorResult = document.querySelector('.errorResult')
title = document.getElementById('title')
a = document.getElementById('a');

function downloadBtn() {
    async function getData() {
      const url = 'https://tiktok-video-no-watermark2.p.rapidapi.com/';
     const getValue = link.value;
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '3850d309c0msh86170860b20e713p1f4a66jsn7485cd4160bd',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
          },
          body: new URLSearchParams({
            url: getValue,
            hd: '1'
          })
        };
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result); 
  alert(result.msg)
	frame.src = result.data.cover;
  frame.innerHTML = result.data.cover;
  hide.style.display = 'block';
  txt.style.display = 'block';
  a.style.display = 'block';
  a.href = result.data.play;
  title.innerHTML = 'Title:  ' +result.data.title;
  title.style.fontSize = '0.9rem'; 
} catch (error) {
	console.error(error);
}}
  getData()
}




