import { Component, OnInit, Input, Output } from '@angular/core';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'gg-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  total: any[];
  repos: any[];
  repo: string;

  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  constructor(private repoService: RepoService) {
  };

  searchRepo() {
    this.repoService.findRepo(this.repo);
    this.repoService.getTotalRepository().subscribe(total => {
      console.log('total ngam!');
      console.log(total);
      this.total = total;
    });

    this.repoService.getRepoDetails().subscribe(repos => {
      console.log('array repo ngam!');
      console.log(repos);
      this.repos = repos.items;
    })
  }



  ngOnInit() {
  }
}
