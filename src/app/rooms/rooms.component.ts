import { Component } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom! : RoomsList;
constructor() {};
ngOnInit(): void{};

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  roomsList: RoomsList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free Wifi, TV, BathRoom, Kitchen',
      price: 500,
      photos: './assets/settipi.j.reddy.jpg',
      checkInTime: new Date('11-Nov-2019'),
      checkOutTime: new Date('12-Nov-2019'),
      rating: 4.6,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free Wifi, TV, Kitchen',
      price: 450,
      photos: './assets/settipi.j.reddy.jpg',
      checkInTime: new Date('11-Dec-2019'),
      checkOutTime: new Date('12-Dec-2019'),
      rating: 3.453,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'AC, Free Wifi, TV, Kitchen',
      price: 1450,
      photos: './assets/settipi.j.reddy.jpg',
      checkInTime: new Date('11-Dec-2019'),
      checkOutTime: new Date('12-Dec-2019'),
      rating: 3.8,
    }
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomsList){
    this.selectedRoom= room;
    console.log(room);
  }
}
