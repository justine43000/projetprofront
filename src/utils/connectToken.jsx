export function connectToken () {
    const token = localStorage.getItem('token');

  
    const config =  {
      headers: { Authorization: `Bearer ${token}`},
  };

  return config;
}