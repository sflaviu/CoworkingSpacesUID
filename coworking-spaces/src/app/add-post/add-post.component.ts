import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  drafts = [];
  selectedFile: File;
  imagePreview: any;
  constructor() { }

  ngOnInit() {
    this.fillDraftsList();
  }
  fillDraftsList(): void {
    const blogList = localStorage.getItem('drafts');
    if (blogList != null) {
      this.drafts = JSON.parse(blogList);
    }
  }
  onFileSelected(image: HTMLInputElement , event) {
    this.selectedFile = <File> event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => { this.imagePreview = reader.result; };
    reader.readAsDataURL(this.selectedFile);
    console.log(event, URL.createObjectURL(this.selectedFile));

    image.src = URL.createObjectURL(this.selectedFile);
  }
  addBlog(title: HTMLInputElement, content: HTMLInputElement) {
    console.log(title.value, content.value);
    const blogList = localStorage.getItem('blogs');
    let blogs = [];
    if (blogList) {
      blogs = JSON.parse(blogList);
    }
    const blog = {title: title.value, content: content.value, image: URL.createObjectURL( this.selectedFile), comments: []};
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    title.value = '';
    content.value = '';
    alert('Added Blog');
  }
  addBlogFromDraft(title: string, content: string, i: number) {
    // console.log(title.value, content.value);
    const blogList = localStorage.getItem('blogs');
    let blogs = [];
    if (blogList) {
      blogs = JSON.parse(blogList);
    }
    const blog = {title: title, content: content, image: 'test', comments: []};
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    const draftsList = localStorage.getItem('drafts');
    let drafts = [];
    if (draftsList) {
      drafts = JSON.parse(draftsList);
    }
    drafts.splice(i, 1);
    localStorage.setItem('drafts', JSON.stringify(drafts));
    this.fillDraftsList();
    alert('Added Blog');
  }
  saveDraft(title: HTMLInputElement, content: HTMLInputElement) {
    console.log(title.value, content.value);
    const blogList = localStorage.getItem('drafts');
    let drafts = [];
    if (blogList) {
      drafts = JSON.parse(blogList);
    }
    const draft = {title: title.value, content: content.value};
    drafts.push(draft);
    localStorage.setItem('drafts', JSON.stringify(drafts));
    title.value = '';
    content.value = '';
    this.fillDraftsList();
    alert('Added Draft');
  }
  deleteDraft(i: number) {
    const draftsList = localStorage.getItem('drafts');
    let drafts = [];
    if (draftsList) {
      drafts = JSON.parse(draftsList);
    }
    drafts.splice(i, 1);
    localStorage.setItem('drafts', JSON.stringify(drafts));
    this.fillDraftsList();
  }
  editDraft(title: HTMLInputElement, content: HTMLInputElement, draftTitle: string, draftContent: string, i: number) {
    console.log(title.value, content.value);
    title.value = draftTitle;
    content.value = draftContent;
    const draftsList = localStorage.getItem('drafts');
    let drafts = [];
    if (draftsList) {
      drafts = JSON.parse(draftsList);
    }
    drafts.splice(i, 1);
    localStorage.setItem('drafts', JSON.stringify(drafts));
    this.fillDraftsList();
  }


}
