const bar = document.querySelector('.bar');
const section = document.querySelector('.progressBar-section');

document.addEventListener('scroll', () => {
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.scrollHeight);
  //   console.log(document.documentElement.clientHeight);

  const scrollPercentage =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;

  bar.style.width = scrollPercentage + '%';

  // my notes for new learning
  //   console.log(document.documentElement.scrollTop);       gives the scroll number wehre the user is
  //   console.log(document.documentElement.scrollHeight);    gives the total height of the document
  //   console.log(document.documentElement.clientHeight);    gives the height of cliend window
});
