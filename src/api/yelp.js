import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer zW0vuKSDkLIyTBcug3x_I9c2JNqucUce1QeIV0ULWAjwJQ11L4vp2chso9TsTNmxRrd4IE0Pe7sER-o2RTF6SbIFTdTJ1UjThX-d4W7yRxEj2Z7KTVjKwWBWooi2YHYx'
  }
});