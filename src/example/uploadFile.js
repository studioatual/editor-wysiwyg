const uploadFiles = (file, { dropProgressBar, dropProgressText }) => {
  const data = new FormData();
  data.append('file', file);
  return axios
    .post(`http://docs.fbssistemas.com.br/api/images/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const progress = Math.floor(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        dropProgressBar.style.width = `${progress}%`;
        dropProgressText.innerText = `${progress}%`;
      },
    })
    .then((response) => {
      return response.data.url;
    });
};
