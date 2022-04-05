import { Component, OnInit } from '@angular/core';

type Profile = {
  id: number;
  login: string;
  name: string;
  followers: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  repos: Repo[];
};

type Repo = {
  id: number;
  name: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  profiles: Profile[] = [];
  showError: boolean = false;

  //------------------------------Fetch-------------------------------------------//
  ngOnInit(): void {
    // this.getProfileWithRepos('Lucas-Ed').then(profile => console.log(profile));
  }

  private async getProfileWithRepos(username: string): Promise<Profile> {
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const profile: Profile = await profileResponse.json();

    const reposResponse = await fetch(profile.repos_url);
    const repos: Repo[] = await reposResponse.json();

    profile.repos = repos;

    return profile;
  }

  //---------------------------------------------------------------------------//

  /* alert */
  searchAlert(value: string): void {
    this.getProfileWithRepos(value)
      .then((profile) => console.log(profile))
      .catch((err) => {
        console.error(err);
        this.showError = true;
      });
  }

  closeAlert() {
    this.showError = false;
  }

  /* método submeter o evento pra prevenir reload ao dar enter */
  handleSubmit(event: Event) {
    event.preventDefault();
  }

  // handleKeyUp(event: Event){
  //   if(event.key === 'Enter'){
  //     this.searchProfile();
  //   }
  // }
  // busca o usuário
  searchUser(value: string) {
    this.getProfileWithRepos(value).then(profile => this.profiles.push(profile)); 
}

// limpa o array de usuários
 clearUsers(): void {
   this.profiles = [];
   localStorage.removeItem('githubpagesdata')
 }
}