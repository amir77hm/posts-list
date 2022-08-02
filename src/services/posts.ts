import axios from "axios";

export default class PostsBroker {
  private _baseUrl;

  constructor(baseUrl = "https://jsonplaceholder.typicode.com") {
    this._baseUrl = baseUrl;
  }

  public async getPosts(): Promise<any> {
    return await axios.get(`${this._baseUrl}/posts`);
  }

  public async getPostById(id: string): Promise<any> {
    return await axios.get(`${this._baseUrl}/posts/${id}`);
  }

  public async getcommentsByPostId(id: string): Promise<any> {
    return await axios.get(`${this._baseUrl}/posts/${id}/comments`);
  }
}
