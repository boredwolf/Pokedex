import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Retourne l'utilisateur actuellement connecté
 */
export async function fetchMe() {
  return (await axios(`${API_URL}/me`)).data;
}