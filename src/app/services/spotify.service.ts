import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //! Variables
  public credentials:any= {
    clientId: '96185c9ea2094961adfba2ff13383031',
    clientSecret:'4899ab44c1c2466f9a716f343e94dbf8',
    accessToken:''
  }
  public scope = 'user-read-private user-read-email user-top-read user-follow-read';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.credentials.accessToken
    })
  }

  public poolURLS = {
    authorize: 'https://accounts.spotify.com/authorize?client_id='+
    this.credentials.clientId + "&response_type=token"+
    '&redirect_uri='+encodeURIComponent('http://localhost:4200/home')+
    '&expires_in=3600'+
    '&scope='+this.scope,
    refreshAccessToken: 'https://accounts.spotify.com/api/token'
  }

  //! Constructor
  constructor(
    private _httpClient : HttpClient
  ) { }
  
  
  // todo METODOS

  upDateToken(){
    this.credentials.accessToken = sessionStorage.getItem('token');
  }


  getQuery<T>(query:string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADER = { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.credentials.accessToken}) }
    return this._httpClient.get<T>(URL,HEADER);

  }

  checkTokenSpoLogin(){
    this.checkTokenSpo() || (sessionStorage.setItem('refererURL',location.href), window.location.replace(this.poolURLS.authorize))
  }

  checkTokenSpo(){
    return !!this.credentials.accessToken;
  }
  tokenRefreshURL(){
    this.checkTokenSpo() && alert('Expiró la sesion')
    this.credentials.accessToken = '';
    sessionStorage.removeItem('token')
  }

  getlink(){
    return this.poolURLS.authorize;
  }

  getCurrentQueryParameters(delimiter = '#') {
    // the access_token is passed back in a URL fragment, not a query string
    // errors, on the other hand are passed back in a query string
    const currentLocation = String(window.location).split(delimiter)[1];
    const params = new URLSearchParams(currentLocation);
    return params;
  }
  saveAccessToken(){
   
    const currentQueryParameters = this.getCurrentQueryParameters('#');
    if(currentQueryParameters.get('access_token')){
      this.credentials.accessToken = String(currentQueryParameters.get('access_token'));
      sessionStorage.setItem('token',this.credentials.accessToken);
    }
   

  }
  ponerToken(){
    this.credentials.accessToken= sessionStorage.getItem('token') ;
  }

  fetchProfileInformation() {
    const URL = `https://api.spotify.com/v1/me`;
    const HEADER = { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.credentials.accessToken}) }
    return this._httpClient.get<User>(URL,HEADER);
  }

  getAccessToken(){
    return this.credentials.accessToken || 'No hay token';
  }

}
