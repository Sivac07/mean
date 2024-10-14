import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor,FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  title = 'Items';

  data: any[] = [];
  apiUrl = 'http://localhost:3000/api/items'; // Replace with your API URL
  
  newItem = {
    name: '',
    details: '',
    price: null
  };

  ngOnInit(): void {
    this.fetchData();
  }

  // Fetch data from the API
  fetchData(): void {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.data = data;
        console.log(this.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Submit new item to the API
  onSubmit(): void {
    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.newItem)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      console.log('Data saved successfully!', data);
      this.fetchData(); // Refresh the data after submitting the form
      this.resetForm(); // Clear the form after submission
    })
    .catch(error => {
      console.error('Error occurred while saving data:', error);
    });
  }

  // Reset the form fields
  resetForm(): void {
    this.newItem = { name: '', details: '', price: null };
  }

  // Delete item function
  deleteItem(id: string): void {
    const deleteUrl = `${this.apiUrl}/${id}`;
    
    fetch(deleteUrl, {
      method: 'DELETE',
    })
    .then(response => {
      console.log(`Response status: ${response.status}`);
      if (!response.ok) {
        return response.text().then(err => {
          throw new Error(`Error: ${response.status} - ${err}`);
        });
      }
      console.log('Item deleted successfully');
      return this.fetchData(); // Refresh data after deletion
    })
    .catch(error => {
      console.error('Error occurred while deleting item:', error);
    });
  }
}
