import { OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import {ActivatedRoute,ParamMap } from '@angular/router';

import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { map } from 'rxjs/operators';

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  posts: Post[] = [];
  list: Post[]=[];
  userid='';
  viewpost;
  view: boolean;
  isLoading = false;
  private postsSub: Subscription;
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';

  toggleSearch: boolean = false;
  constructor(public postsService: PostsService,
    public route: ActivatedRoute) {}

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
 
  ngOnInit() {
    this.isLoading = true;
    //this.postsService.getPosts();
    //this.postsService.getuserPosts(this.userid);
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
        this.list = posts.reverse();
      });
      this.view=false;
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has("userId")) {
          this.userid = paramMap.get("userId");
        }
      });
      this.postsService.getuserPosts(this.userid);
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  selectedpost(post: Post){
    this.view=true;
    this.viewpost=post;
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
