import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.web3forms.com/submit';

  constructor(private http: HttpClient) {}

  sendForm(data: any) {
    // Добавляем access key к данным
    const formData = { ...data, access_key: environment.WEB3FORMS_ACCESS_KEY };

    return this.http.post(this.apiUrl, formData);
  }
}
