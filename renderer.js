function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
  
  const inputContainer = document.getElementById('input-container');
  const videoContainer = document.getElementById('video-container');
  const urlForm = document.getElementById('url-form');
  
  urlForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get URLs from form inputs
    const url1 = document.getElementById('url1').value;
    const url2 = document.getElementById('url2').value;
    const url3 = document.getElementById('url3').value;
    const url4 = document.getElementById('url4').value;
  
    // Clear videoContainer content
    videoContainer.innerHTML = '';
  
    // Create iframe elements for each box
    const urls = [url1, url2, url3, url4];
  
    for (let i = 0; i < urls.length; i++) {
        if (isValidUrl(urls[i])) {
          const iframeElement = document.createElement('iframe');
          const boxElement = document.createElement('div');
          iframeElement.src = urls[i];
          iframeElement.setAttribute('frameborder', '0');
          iframeElement.setAttribute('allowfullscreen', '');
          iframeElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-presentation'); // Add this line
      
          boxElement.classList.add('box');
          boxElement.appendChild(iframeElement);
      
          videoContainer.appendChild(boxElement);
        }
      }
  
    // Hide input container after all iframes are created
    inputContainer.classList.add('hidden');
  });
  