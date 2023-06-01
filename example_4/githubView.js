class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display();
      });
    });
  }

  display() {
    const repoNameElement = document.querySelector('#repo-name');
    const repoDescription = document.querySelector('#repo-description');
    const repoImage = document.querySelector('#repo-image');

    const repoInfo = this.model.getRepoInfo();
    repoNameElement.innerText = repoInfo.full_name;
    repoDescription.innerText = repoInfo.description;
    repoImage.src = repoData.organization.avatar_url;
  };
};

module.exports = GithubView;

