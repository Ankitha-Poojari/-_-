function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      document.getElementById('loginPage').classList.add('hidden');
      document.getElementById('appsPage').classList.remove('hidden');
    } else {
      alert('Please enter both username and password');
    }
  }
  
  function showPosts(appName) {
    document.getElementById('appsPage').classList.add('hidden');
    document.getElementById('postsPage').classList.remove('hidden');
    document.getElementById('appTitle').textContent = appName;
  
    const posts = [
      { title: "Post 1", content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⠀⢀⣴⣶⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣞⣿⢠⡟⣿⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣨⣿⣿⣼⣿⣟⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⠶⠶⣿⣿⣿⢛⣿⣿⣿⣷⡟⠏⠿⡄⠀⠀⠀⠀
⠀⣀⣠⣤⣤⣼⣿⣟⢛⠠⡀⢄⡸⠄⣿⢿⣿⣇⣼⢿⣿⣟⠣⡘⠸⢿⠀⠀⠀⠀
⣸⣿⣿⣿⣿⣿⣿⣿⡌⠱⣈⠒⡄⢣⠘⠾⠟⡠⠘⠞⡿⢋⠔⢡⠃⣿⡆⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⡇⠡⠄⢃⠌⠄⢣⠘⠤⡁⢍⠒⡐⠌⣂⠦⣉⣿⡇⠀⠀⠀
⢿⣿⣿⣿⣿⣿⣿⣿⡇⢡⠊⠔⡨⠘⢄⠊⡔⢁⠊⡔⢁⠎⣐⠺⢅⣾⡇⠀⠀⠀
⠘⣿⣿⣿⣿⣿⣿⣿⠃⡐⠌⡂⠥⢑⡈⢒⠨⠄⡃⢄⢃⢎⡱⢃⠎⣾⠇⠀⠀⠀
⠀⠈⠛⢿⣿⣿⡿⠋⡐⢀⠢⢡⠘⡠⠘⡄⢃⣜⣠⣮⡿⠷⡂⢍⢂⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠓⠶⠶⠤⢾⣄⠂⡱⣌⡜⣻⣋⣯⡕⡘⠤⡑⢪⡰⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⣤⣔⣸⣨⣍⣍⣱⣬⣶⣽⣶⡿⠟⠢⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⡷⠈⠙⠛⠿⠯⠽⠿⠿⠟⠛⠋⠉⣄⣇⠀⠹⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢃⡇⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠄⠀⣹⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⣾⠃⠘⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⣿⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡏⠀⠀⠀⣼⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡉⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⣷⣤⣀⣼⠏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠘⠿⢿⣿⣯⣽⣻⠟⠁⠐⢤⡯⢙⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠘⣿⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠲⢶⣄⠀⢻⡆⠀⣤⣀⠀⠀⠀⢸⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣽⡄⠀⠀⠀⠘⣿⠀⠈⠛⠃⠀⠀⢸⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠉⠛⠓⠒⠒⠻⡟⠒⠶⠦⠶⠶⠞⢿⡆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠬⣷⣶⢶⣦⣤⣄⣷⣄⣀⣄⣀⣀⣠⣾⠇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⡄⡀⠙⢾⣟⢯⣿⡿⠿⠿⢿⣿⣿⡿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⣤⣤⣤⣤⣼⣿⣿⡇⠈⠠⠄⠀⠙⣿⣿⡿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠁⠀⠀⠀⠘⠿⣭⣉⣉⣩⡵⠋⠀⠀⠀` },
      { title: "Post 2", content: `⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀
⡈⠀⢀⣴⣦⢶⣴⣴⣦⢶⣴⢦⣶⡴⣦⡶⣴⣦⢶⣴⣤⡀⠀⠠⡀
⠀⠀⣿⣟⣾⠗⢀⢸⣾⢿⣽⣻⣾⠻⠝⠛⢉⡈⠛⠻⢾⣿⠀⠀⠀
⠀⠀⣿⣾⠷⠞⣹⡿⣯⢿⡞⠋⣡⣴⣾⢿⣟⡿⣟⣷⣄⠹⠀⠀⠀
⠀⠀⣿⣯⣤⣼⡿⣽⡛⢁⣴⣿⣻⣽⡾⣯⡿⣽⣟⣷⣻⡆⠀⠀⠀
⠀⠀⣿⣽⣻⢯⡟⠃⣴⣿⣻⢾⣽⣳⡿⣽⣻⣽⡾⣯⣷⢿⠀⠀⠀
⠀⠀⣿⣳⡿⠏⣠⣿⣟⣷⣻⣯⣟⣷⣿⣻⣽⣷⣻⢷⣯⣿⠀⠀⠀
⠀⠀⣿⣽⠃⣴⣿⣳⢿⣞⡿⣿⠆⠀⠀⢠⣿⣞⣯⣿⣳⡏⠀⠀⠀
⠀⠀⣿⠃⣼⣻⢾⣽⣯⣿⠟⠁⠀⣠⣄⣸⣿⢾⣽⣞⣯⠅⠀⠀⠀
⠀⠀⡇⣸⣷⣻⣯⣷⣻⣿⡀⣠⠞⠹⣿⣿⢯⣿⣞⣯⠏⢸⠀⠀⠀
⠀⠀⢁⣿⣽⣯⢿⣽⡟⢿⠗⠉⠀⢠⣿⣽⢾⣯⣟⡿⢀⣾⠀⠀⠀
⠀⠀⢸⣟⣾⡽⣯⣿⠀⠀⠀⣠⣶⣿⣻⢾⣟⣾⡽⢀⣾⣻⠀⠀⠀
⠀⠀⣿⣟⡷⣿⣻⣿⣤⣤⣤⣬⣿⣷⣻⣯⢿⠞⢠⣾⢯⣿⠀⠀⠀
⠀⠀⣿⣽⣻⢷⣟⣿⣻⣟⣿⣻⣟⡾⣷⡻⠋⣰⣿⢯⣿⣽⠀⠀⠀
⠀⠀⢻⣷⣻⢿⣾⣳⡿⣾⡽⣷⣻⡽⠛⣠⣾⢿⡽⠿⢾⣽⠀⠀⠀
⠀⠐⡌⢳⣿⣻⡾⣽⣻⢷⣟⠏⢃⣤⣾⢿⡽⡟⣁⣤⣾⣿⠀⠀⠀
⠀⠀⣿⢦⣈⣑⠛⠛⣋⣁⣤⡾⣿⡽⣾⣻⡏⠛⣡⣾⣟⣾⠀⠀⠀
⠃⠀⠙⢿⣯⣟⣿⣻⣯⣿⣽⣻⣷⣟⣯⣷⣷⣶⣿⣳⡯⠋⠀⠀⠀` },
    ];
  
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('posts');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      postsContainer.appendChild(postElement);
    });
  }
  
  function goBack() {
    document.getElementById('postsPage').classList.add('hidden');
    document.getElementById('appsPage').classList.remove('hidden');
  }
  