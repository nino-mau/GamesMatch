// **** IMPORTS ****

// Import Dependencies
import jwt from 'jsonwebtoken';
import ms from 'ms';

// Functions
import { getRefreshTokenInfo } from '../db/mysql.js';

// **** FUNCTIONS ****

// *** Authentifications ***

// Check if email syntax is valid
export function isValidEmailFormat(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (email) {
      return emailRegex.test(email);
   } else {
      return false;
   }
}

// Check if all items in an object are true
export function areAllObjectsItemsTrue(obj) {
   Object.values(obj).every((item) => item === true);
}

// Check if refresh token is valid (if it exist in db)
export async function verifyRefreshToken(userId, tokenId) {
   const data = await getRefreshTokenInfo(userId);
   if (data) {
      // Compare token id and verify if token is expired
      if (tokenId === data.token_id) {
         console.log('verifyRefreshToken: Refresh token is valid');
         return true;
      } else {
         console.log("verifyRefreshToken: Refresh token isn't valid");
         return false;
      }
   } else {
      console.log("verifyRefreshToken: Refresh token isn't valid");
      return false;
   }
}

// Generate a an json web token for a new user, duration is a string with a time identifier (m/h)
export async function generateUserAccessToken(userData) {
   const secretKey = process.env.ACCESS_TOKEN_SECRET;

   const token = jwt.sign(
      {
         id: userData.id,
         username: userData.username,
         email: userData.email,
         role: 'accessToken',
      },
      secretKey,
      {
         expiresIn: ms(process.env.ACCESS_TOKEN_DURATION),
      },
   );
   return token;
}

// Generate a a long term json web token for a user who selected "stay signed in"
export async function generateUserRefreshToken(userData, tokenId, duration) {
   const secretKey = process.env.REFRESH_TOKEN_SECRET;

   const token = jwt.sign(
      {
         tokenId: tokenId,
         userId: userData.id,
         role: 'refreshToken',
      },
      secretKey,
      {
         expiresIn: duration,
      },
   );
   return token;
}
