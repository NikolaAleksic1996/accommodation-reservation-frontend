import axiosInstance from '../helpers/axiosConfig';

class AccommodationService {
    static getAccommodation = async () => axiosInstance.get('/test/accommodation')
}

export default AccommodationService;