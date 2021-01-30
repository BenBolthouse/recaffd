'use strict';

const { Op } = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert('Tags', [
        { name: 'Tangy' },
        { name: 'Zesty' },
        { name: 'Fruity' },
        { name: 'Flowery' },
        { name: 'Bubbly' },
        { name: 'Flat' },
        { name: 'Milky' },
        { name: 'Hot' },
        { name: 'Cold' },
        { name: 'Iced' },
        { name: 'Frozen' },
        { name: 'Bitter' },
        { name: 'Sour' },
        { name: 'Diet Friendly' },
        { name: 'Fair Trade' },
        { name: 'Dark Roast' },
        { name: 'Light Roast' },
        { name: 'Foamy' },
        { name: 'Caramel' },
        { name: 'Chocolate' },
        { name: 'Vanilla' },
        { name: 'Hazelnut' },
        { name: 'Cinnamon' },
      ])
      .then(() => {
        return queryInterface.bulkInsert(
          'ProductTags',
          [
            { productId: 361, tagId: 41 },
            { productId: 262, tagId: 52 },
            { productId: 10, tagId: 51 },
            { productId: 233, tagId: 44 },
            { productId: 12, tagId: 46 },
            { productId: 271, tagId: 49 },
            { productId: 410, tagId: 38 },
            { productId: 94, tagId: 40 },
            { productId: 231, tagId: 41 },
            { productId: 444, tagId: 30 },
            { productId: 52, tagId: 32 },
            { productId: 147, tagId: 40 },
            { productId: 234, tagId: 44 },
            { productId: 155, tagId: 33 },
            { productId: 450, tagId: 36 },
            { productId: 81, tagId: 48 },
            { productId: 113, tagId: 49 },
            { productId: 140, tagId: 30 },
            { productId: 191, tagId: 46 },
            { productId: 147, tagId: 39 },
            { productId: 255, tagId: 32 },
            { productId: 238, tagId: 45 },
            { productId: 127, tagId: 48 },
            { productId: 279, tagId: 31 },
            { productId: 275, tagId: 48 },
            { productId: 414, tagId: 49 },
            { productId: 31, tagId: 32 },
            { productId: 87, tagId: 39 },
            { productId: 331, tagId: 42 },
            { productId: 226, tagId: 39 },
            { productId: 112, tagId: 32 },
            { productId: 294, tagId: 48 },
            { productId: 156, tagId: 40 },
            { productId: 390, tagId: 49 },
            { productId: 362, tagId: 32 },
            { productId: 298, tagId: 41 },
            { productId: 250, tagId: 40 },
            { productId: 235, tagId: 34 },
            { productId: 144, tagId: 45 },
            { productId: 212, tagId: 39 },
            { productId: 15, tagId: 33 },
            { productId: 92, tagId: 49 },
            { productId: 420, tagId: 30 },
            { productId: 97, tagId: 48 },
            { productId: 236, tagId: 45 },
            { productId: 158, tagId: 38 },
            { productId: 240, tagId: 46 },
            { productId: 163, tagId: 51 },
            { productId: 326, tagId: 34 },
            { productId: 6, tagId: 48 },
            { productId: 62, tagId: 47 },
            { productId: 444, tagId: 52 },
            { productId: 146, tagId: 30 },
            { productId: 279, tagId: 38 },
            { productId: 405, tagId: 52 },
            { productId: 167, tagId: 30 },
            { productId: 17, tagId: 44 },
            { productId: 245, tagId: 40 },
            { productId: 402, tagId: 46 },
            { productId: 189, tagId: 36 },
            { productId: 434, tagId: 51 },
            { productId: 159, tagId: 48 },
            { productId: 28, tagId: 43 },
            { productId: 157, tagId: 38 },
            { productId: 84, tagId: 50 },
            { productId: 187, tagId: 43 },
            { productId: 202, tagId: 33 },
            { productId: 112, tagId: 39 },
            { productId: 305, tagId: 31 },
            { productId: 169, tagId: 48 },
            { productId: 101, tagId: 50 },
            { productId: 247, tagId: 35 },
            { productId: 225, tagId: 41 },
            { productId: 124, tagId: 43 },
            { productId: 390, tagId: 47 },
            { productId: 225, tagId: 30 },
            { productId: 293, tagId: 42 },
            { productId: 332, tagId: 50 },
            { productId: 70, tagId: 45 },
            { productId: 335, tagId: 36 },
            { productId: 162, tagId: 32 },
            { productId: 274, tagId: 41 },
            { productId: 320, tagId: 43 },
            { productId: 17, tagId: 37 },
            { productId: 156, tagId: 48 },
            { productId: 122, tagId: 42 },
            { productId: 47, tagId: 42 },
            { productId: 392, tagId: 30 },
            { productId: 338, tagId: 45 },
            { productId: 358, tagId: 40 },
            { productId: 140, tagId: 47 },
            { productId: 201, tagId: 32 },
            { productId: 264, tagId: 40 },
            { productId: 380, tagId: 48 },
            { productId: 96, tagId: 40 },
            { productId: 434, tagId: 39 },
            { productId: 404, tagId: 40 },
            { productId: 108, tagId: 52 },
            { productId: 152, tagId: 31 },
            { productId: 78, tagId: 33 },
            { productId: 182, tagId: 35 },
            { productId: 345, tagId: 43 },
            { productId: 401, tagId: 38 },
            { productId: 45, tagId: 40 },
            { productId: 85, tagId: 50 },
            { productId: 51, tagId: 34 },
            { productId: 310, tagId: 51 },
            { productId: 392, tagId: 36 },
            { productId: 30, tagId: 45 },
            { productId: 307, tagId: 37 },
            { productId: 31, tagId: 41 },
            { productId: 108, tagId: 30 },
            { productId: 329, tagId: 31 },
            { productId: 247, tagId: 30 },
            { productId: 127, tagId: 42 },
            { productId: 379, tagId: 38 },
            { productId: 425, tagId: 32 },
            { productId: 90, tagId: 37 },
            { productId: 377, tagId: 41 },
            { productId: 17, tagId: 36 },
            { productId: 388, tagId: 36 },
            { productId: 410, tagId: 30 },
            { productId: 162, tagId: 39 },
            { productId: 151, tagId: 50 },
            { productId: 227, tagId: 51 },
            { productId: 313, tagId: 41 },
            { productId: 361, tagId: 45 },
            { productId: 302, tagId: 45 },
            { productId: 361, tagId: 30 },
            { productId: 185, tagId: 46 },
            { productId: 365, tagId: 35 },
            { productId: 339, tagId: 43 },
            { productId: 186, tagId: 44 },
            { productId: 399, tagId: 44 },
            { productId: 4, tagId: 47 },
            { productId: 311, tagId: 47 },
            { productId: 227, tagId: 52 },
            { productId: 317, tagId: 43 },
            { productId: 385, tagId: 44 },
            { productId: 230, tagId: 36 },
            { productId: 329, tagId: 49 },
            { productId: 356, tagId: 38 },
            { productId: 449, tagId: 52 },
            { productId: 424, tagId: 51 },
            { productId: 236, tagId: 30 },
            { productId: 348, tagId: 34 },
            { productId: 149, tagId: 38 },
            { productId: 350, tagId: 36 },
            { productId: 63, tagId: 32 },
            { productId: 287, tagId: 34 },
            { productId: 399, tagId: 49 },
            { productId: 298, tagId: 47 },
            { productId: 188, tagId: 31 },
            { productId: 167, tagId: 48 },
            { productId: 202, tagId: 39 },
            { productId: 260, tagId: 44 },
            { productId: 31, tagId: 44 },
            { productId: 339, tagId: 36 },
            { productId: 405, tagId: 45 },
            { productId: 242, tagId: 51 },
            { productId: 428, tagId: 30 },
            { productId: 56, tagId: 39 },
            { productId: 202, tagId: 49 },
            { productId: 125, tagId: 32 },
            { productId: 122, tagId: 50 },
            { productId: 129, tagId: 34 },
            { productId: 418, tagId: 52 },
            { productId: 436, tagId: 36 },
            { productId: 418, tagId: 44 },
            { productId: 241, tagId: 37 },
            { productId: 4, tagId: 43 },
            { productId: 14, tagId: 30 },
            { productId: 253, tagId: 39 },
            { productId: 134, tagId: 32 },
            { productId: 300, tagId: 36 },
            { productId: 196, tagId: 52 },
            { productId: 268, tagId: 52 },
            { productId: 319, tagId: 39 },
            { productId: 35, tagId: 35 },
            { productId: 412, tagId: 51 },
            { productId: 303, tagId: 37 },
            { productId: 382, tagId: 51 },
            { productId: 165, tagId: 32 },
            { productId: 343, tagId: 42 },
            { productId: 273, tagId: 31 },
            { productId: 85, tagId: 50 },
            { productId: 260, tagId: 31 },
            { productId: 305, tagId: 43 },
            { productId: 163, tagId: 36 },
            { productId: 160, tagId: 34 },
            { productId: 432, tagId: 30 },
            { productId: 83, tagId: 50 },
            { productId: 397, tagId: 36 },
            { productId: 8, tagId: 52 },
            { productId: 10, tagId: 49 },
            { productId: 55, tagId: 37 },
            { productId: 72, tagId: 47 },
            { productId: 131, tagId: 38 },
            { productId: 77, tagId: 50 },
            { productId: 402, tagId: 30 },
            { productId: 137, tagId: 51 },
            { productId: 45, tagId: 30 },
            { productId: 32, tagId: 35 },
            { productId: 303, tagId: 45 },
            { productId: 363, tagId: 42 },
            { productId: 145, tagId: 35 },
            { productId: 325, tagId: 50 },
            { productId: 284, tagId: 34 },
            { productId: 298, tagId: 33 },
            { productId: 183, tagId: 42 },
            { productId: 119, tagId: 48 },
            { productId: 274, tagId: 39 },
            { productId: 32, tagId: 30 },
            { productId: 385, tagId: 36 },
            { productId: 420, tagId: 34 },
            { productId: 356, tagId: 48 },
            { productId: 96, tagId: 34 },
            { productId: 54, tagId: 51 },
            { productId: 250, tagId: 35 },
            { productId: 272, tagId: 30 },
            { productId: 312, tagId: 52 },
            { productId: 9, tagId: 48 },
            { productId: 165, tagId: 42 },
            { productId: 91, tagId: 44 },
            { productId: 353, tagId: 51 },
            { productId: 352, tagId: 42 },
            { productId: 343, tagId: 33 },
            { productId: 300, tagId: 51 },
            { productId: 289, tagId: 45 },
            { productId: 209, tagId: 35 },
            { productId: 116, tagId: 40 },
            { productId: 332, tagId: 46 },
            { productId: 291, tagId: 33 },
            { productId: 262, tagId: 41 },
            { productId: 247, tagId: 44 },
            { productId: 366, tagId: 43 },
            { productId: 343, tagId: 30 },
            { productId: 345, tagId: 30 },
            { productId: 46, tagId: 31 },
            { productId: 59, tagId: 35 },
            { productId: 256, tagId: 45 },
            { productId: 140, tagId: 50 },
            { productId: 197, tagId: 41 },
            { productId: 169, tagId: 47 },
            { productId: 421, tagId: 45 },
            { productId: 325, tagId: 37 },
            { productId: 313, tagId: 49 },
            { productId: 149, tagId: 38 },
            { productId: 319, tagId: 32 },
            { productId: 392, tagId: 43 },
            { productId: 224, tagId: 43 },
            { productId: 82, tagId: 34 },
            { productId: 98, tagId: 33 },
            { productId: 163, tagId: 46 },
            { productId: 144, tagId: 45 },
            { productId: 156, tagId: 33 },
            { productId: 205, tagId: 39 },
            { productId: 411, tagId: 41 },
            { productId: 47, tagId: 40 },
            { productId: 367, tagId: 37 },
            { productId: 232, tagId: 32 },
            { productId: 114, tagId: 45 },
            { productId: 402, tagId: 44 },
            { productId: 174, tagId: 50 },
            { productId: 361, tagId: 43 },
            { productId: 324, tagId: 39 },
            { productId: 374, tagId: 48 },
            { productId: 212, tagId: 44 },
            { productId: 257, tagId: 48 },
            { productId: 434, tagId: 51 },
            { productId: 254, tagId: 41 },
            { productId: 47, tagId: 33 },
            { productId: 43, tagId: 31 },
            { productId: 186, tagId: 41 },
            { productId: 34, tagId: 48 },
            { productId: 327, tagId: 50 },
            { productId: 155, tagId: 46 },
            { productId: 199, tagId: 32 },
            { productId: 12, tagId: 40 },
            { productId: 369, tagId: 47 },
            { productId: 380, tagId: 37 },
            { productId: 285, tagId: 46 },
            { productId: 353, tagId: 42 },
            { productId: 326, tagId: 40 },
            { productId: 89, tagId: 46 },
            { productId: 384, tagId: 33 },
            { productId: 201, tagId: 35 },
            { productId: 263, tagId: 45 },
            { productId: 32, tagId: 51 },
            { productId: 47, tagId: 34 },
            { productId: 36, tagId: 41 },
            { productId: 149, tagId: 36 },
            { productId: 325, tagId: 45 },
            { productId: 61, tagId: 37 },
            { productId: 249, tagId: 39 },
            { productId: 383, tagId: 39 },
            { productId: 371, tagId: 46 },
            { productId: 218, tagId: 36 },
            { productId: 273, tagId: 40 },
            { productId: 446, tagId: 45 },
            { productId: 8, tagId: 43 },
            { productId: 366, tagId: 35 },
            { productId: 281, tagId: 34 },
            { productId: 335, tagId: 44 },
            { productId: 294, tagId: 30 },
            { productId: 348, tagId: 42 },
            { productId: 347, tagId: 38 },
            { productId: 276, tagId: 33 },
            { productId: 17, tagId: 45 },
            { productId: 347, tagId: 36 },
            { productId: 277, tagId: 35 },
            { productId: 385, tagId: 31 },
            { productId: 97, tagId: 44 },
            { productId: 281, tagId: 30 },
            { productId: 443, tagId: 32 },
            { productId: 41, tagId: 37 },
            { productId: 349, tagId: 37 },
            { productId: 254, tagId: 35 },
            { productId: 337, tagId: 32 },
            { productId: 303, tagId: 34 },
            { productId: 188, tagId: 49 },
            { productId: 358, tagId: 44 },
            { productId: 53, tagId: 30 },
            { productId: 408, tagId: 48 },
            { productId: 279, tagId: 32 },
            { productId: 100, tagId: 40 },
            { productId: 261, tagId: 40 },
            { productId: 317, tagId: 37 },
            { productId: 365, tagId: 36 },
            { productId: 384, tagId: 30 },
            { productId: 135, tagId: 35 },
            { productId: 227, tagId: 41 },
            { productId: 89, tagId: 41 },
            { productId: 384, tagId: 33 },
            { productId: 129, tagId: 42 },
            { productId: 284, tagId: 37 },
            { productId: 274, tagId: 45 },
            { productId: 235, tagId: 43 },
            { productId: 250, tagId: 31 },
            { productId: 59, tagId: 31 },
            { productId: 111, tagId: 43 },
            { productId: 343, tagId: 34 },
            { productId: 363, tagId: 32 },
            { productId: 31, tagId: 46 },
            { productId: 53, tagId: 30 },
            { productId: 79, tagId: 45 },
            { productId: 2, tagId: 36 },
            { productId: 257, tagId: 43 },
            { productId: 276, tagId: 42 },
            { productId: 109, tagId: 33 },
            { productId: 48, tagId: 50 },
            { productId: 167, tagId: 32 },
            { productId: 349, tagId: 41 },
            { productId: 5, tagId: 40 },
            { productId: 131, tagId: 30 },
            { productId: 37, tagId: 52 },
            { productId: 9, tagId: 33 },
            { productId: 220, tagId: 40 },
            { productId: 370, tagId: 35 },
            { productId: 245, tagId: 33 },
            { productId: 69, tagId: 43 },
            { productId: 5, tagId: 39 },
            { productId: 388, tagId: 41 },
            { productId: 359, tagId: 44 },
            { productId: 76, tagId: 35 },
            { productId: 405, tagId: 48 },
            { productId: 369, tagId: 47 },
            { productId: 126, tagId: 41 },
            { productId: 192, tagId: 39 },
            { productId: 8, tagId: 41 },
            { productId: 315, tagId: 43 },
            { productId: 115, tagId: 50 },
            { productId: 68, tagId: 47 },
            { productId: 340, tagId: 33 },
            { productId: 220, tagId: 49 },
            { productId: 29, tagId: 51 },
            { productId: 195, tagId: 50 },
            { productId: 368, tagId: 36 },
            { productId: 441, tagId: 30 },
            { productId: 334, tagId: 33 },
            { productId: 35, tagId: 37 },
            { productId: 127, tagId: 50 },
            { productId: 238, tagId: 43 },
            { productId: 6, tagId: 42 },
            { productId: 53, tagId: 51 },
            { productId: 434, tagId: 38 },
            { productId: 387, tagId: 30 },
            { productId: 381, tagId: 40 },
            { productId: 247, tagId: 47 },
            { productId: 440, tagId: 35 },
            { productId: 103, tagId: 44 },
            { productId: 320, tagId: 49 },
            { productId: 143, tagId: 45 },
            { productId: 315, tagId: 49 },
            { productId: 133, tagId: 39 },
            { productId: 191, tagId: 39 },
            { productId: 124, tagId: 43 },
            { productId: 193, tagId: 45 },
            { productId: 52, tagId: 40 },
            { productId: 83, tagId: 37 },
            { productId: 331, tagId: 38 },
            { productId: 68, tagId: 42 },
            { productId: 49, tagId: 43 },
            { productId: 168, tagId: 30 },
            { productId: 13, tagId: 42 },
            { productId: 273, tagId: 49 },
            { productId: 401, tagId: 37 },
            { productId: 313, tagId: 51 },
            { productId: 380, tagId: 34 },
            { productId: 448, tagId: 37 },
            { productId: 336, tagId: 36 },
            { productId: 309, tagId: 32 },
            { productId: 203, tagId: 30 },
            { productId: 50, tagId: 35 },
            { productId: 111, tagId: 46 },
            { productId: 88, tagId: 36 },
            { productId: 181, tagId: 51 },
            { productId: 349, tagId: 44 },
            { productId: 311, tagId: 31 },
            { productId: 69, tagId: 47 },
            { productId: 325, tagId: 38 },
            { productId: 128, tagId: 30 },
            { productId: 108, tagId: 41 },
            { productId: 205, tagId: 47 },
            { productId: 300, tagId: 44 },
            { productId: 245, tagId: 48 },
            { productId: 159, tagId: 38 },
            { productId: 316, tagId: 30 },
            { productId: 197, tagId: 45 },
            { productId: 148, tagId: 51 },
            { productId: 96, tagId: 38 },
            { productId: 302, tagId: 40 },
            { productId: 345, tagId: 51 },
            { productId: 308, tagId: 51 },
            { productId: 243, tagId: 41 },
            { productId: 20, tagId: 48 },
            { productId: 203, tagId: 44 },
            { productId: 399, tagId: 48 },
            { productId: 423, tagId: 31 },
            { productId: 90, tagId: 41 },
            { productId: 130, tagId: 30 },
            { productId: 365, tagId: 37 },
            { productId: 404, tagId: 49 },
            { productId: 183, tagId: 43 },
            { productId: 384, tagId: 51 },
            { productId: 354, tagId: 36 },
            { productId: 352, tagId: 46 },
            { productId: 400, tagId: 47 },
            { productId: 161, tagId: 39 },
            { productId: 80, tagId: 50 },
            { productId: 88, tagId: 34 },
            { productId: 230, tagId: 31 },
            { productId: 106, tagId: 48 },
            { productId: 387, tagId: 49 },
            { productId: 441, tagId: 39 },
            { productId: 228, tagId: 36 },
            { productId: 274, tagId: 44 },
            { productId: 419, tagId: 32 },
            { productId: 438, tagId: 42 },
            { productId: 196, tagId: 35 },
            { productId: 79, tagId: 31 },
            { productId: 390, tagId: 38 },
            { productId: 171, tagId: 45 },
            { productId: 358, tagId: 31 },
            { productId: 203, tagId: 50 },
            { productId: 288, tagId: 51 },
            { productId: 317, tagId: 38 },
            { productId: 168, tagId: 50 },
            { productId: 184, tagId: 48 },
            { productId: 258, tagId: 36 },
            { productId: 189, tagId: 32 },
            { productId: 292, tagId: 43 },
            { productId: 337, tagId: 30 },
            { productId: 375, tagId: 48 },
            { productId: 66, tagId: 39 },
            { productId: 73, tagId: 51 },
            { productId: 306, tagId: 37 },
            { productId: 323, tagId: 38 },
            { productId: 53, tagId: 31 },
            { productId: 137, tagId: 39 },
            { productId: 37, tagId: 47 },
            { productId: 208, tagId: 37 },
            { productId: 386, tagId: 43 },
            { productId: 209, tagId: 40 },
            { productId: 253, tagId: 38 },
            { productId: 114, tagId: 47 },
            { productId: 266, tagId: 47 },
            { productId: 2, tagId: 32 },
            { productId: 33, tagId: 40 },
            { productId: 43, tagId: 45 },
            { productId: 428, tagId: 41 },
            { productId: 174, tagId: 30 },
            { productId: 283, tagId: 33 },
            { productId: 164, tagId: 30 },
            { productId: 243, tagId: 37 },
            { productId: 444, tagId: 31 },
            { productId: 211, tagId: 37 },
            { productId: 85, tagId: 47 },
            { productId: 236, tagId: 39 },
            { productId: 163, tagId: 46 },
            { productId: 124, tagId: 32 },
            { productId: 65, tagId: 51 },
            { productId: 349, tagId: 33 },
            { productId: 370, tagId: 45 },
            { productId: 315, tagId: 48 },
            { productId: 137, tagId: 33 },
            { productId: 275, tagId: 50 },
            { productId: 4, tagId: 51 },
            { productId: 442, tagId: 52 },
            { productId: 360, tagId: 34 },
            { productId: 122, tagId: 45 },
            { productId: 390, tagId: 30 },
            { productId: 28, tagId: 37 },
            { productId: 286, tagId: 48 },
            { productId: 112, tagId: 47 },
            { productId: 416, tagId: 48 },
            { productId: 290, tagId: 37 },
            { productId: 89, tagId: 45 },
            { productId: 206, tagId: 36 },
            { productId: 309, tagId: 49 },
            { productId: 218, tagId: 38 },
            { productId: 445, tagId: 51 },
            { productId: 116, tagId: 48 },
            { productId: 113, tagId: 49 },
            { productId: 214, tagId: 41 },
            { productId: 410, tagId: 37 },
            { productId: 100, tagId: 40 },
            { productId: 86, tagId: 34 },
            { productId: 77, tagId: 50 },
            { productId: 335, tagId: 48 },
            { productId: 359, tagId: 48 },
            { productId: 323, tagId: 35 },
            { productId: 285, tagId: 34 },
            { productId: 44, tagId: 39 },
            { productId: 272, tagId: 46 },
            { productId: 416, tagId: 49 },
            { productId: 253, tagId: 47 },
            { productId: 13, tagId: 40 },
            { productId: 258, tagId: 35 },
            { productId: 278, tagId: 33 },
            { productId: 89, tagId: 49 },
            { productId: 102, tagId: 41 },
            { productId: 151, tagId: 49 },
            { productId: 283, tagId: 44 },
            { productId: 317, tagId: 38 },
            { productId: 170, tagId: 42 },
            { productId: 434, tagId: 39 },
            { productId: 142, tagId: 31 },
            { productId: 27, tagId: 34 },
            { productId: 303, tagId: 42 },
            { productId: 427, tagId: 50 },
            { productId: 262, tagId: 33 },
            { productId: 374, tagId: 47 },
            { productId: 99, tagId: 41 },
            { productId: 251, tagId: 45 },
            { productId: 147, tagId: 50 },
            { productId: 69, tagId: 39 },
            { productId: 84, tagId: 33 },
            { productId: 53, tagId: 50 },
            { productId: 433, tagId: 45 },
            { productId: 439, tagId: 33 },
            { productId: 218, tagId: 44 },
            { productId: 283, tagId: 34 },
            { productId: 4, tagId: 51 },
            { productId: 232, tagId: 36 },
            { productId: 107, tagId: 32 },
            { productId: 380, tagId: 33 },
            { productId: 212, tagId: 32 },
            { productId: 73, tagId: 42 },
            { productId: 414, tagId: 37 },
            { productId: 228, tagId: 47 },
            { productId: 396, tagId: 51 },
            { productId: 128, tagId: 32 },
            { productId: 95, tagId: 37 },
            { productId: 188, tagId: 44 },
            { productId: 396, tagId: 32 },
            { productId: 42, tagId: 40 },
            { productId: 159, tagId: 49 },
            { productId: 221, tagId: 34 },
            { productId: 88, tagId: 51 },
            { productId: 252, tagId: 46 },
            { productId: 286, tagId: 48 },
            { productId: 291, tagId: 33 },
            { productId: 144, tagId: 50 },
            { productId: 347, tagId: 52 },
            { productId: 202, tagId: 50 },
            { productId: 126, tagId: 37 },
            { productId: 72, tagId: 49 },
            { productId: 367, tagId: 39 },
            { productId: 84, tagId: 41 },
            { productId: 64, tagId: 51 },
            { productId: 218, tagId: 42 },
            { productId: 32, tagId: 42 },
            { productId: 168, tagId: 41 },
            { productId: 25, tagId: 39 },
            { productId: 199, tagId: 41 },
            { productId: 95, tagId: 45 },
            { productId: 68, tagId: 43 },
            { productId: 358, tagId: 43 },
            { productId: 349, tagId: 52 },
            { productId: 106, tagId: 33 },
            { productId: 328, tagId: 44 },
            { productId: 60, tagId: 36 },
            { productId: 247, tagId: 34 },
            { productId: 261, tagId: 52 },
            { productId: 258, tagId: 47 },
            { productId: 241, tagId: 32 },
            { productId: 271, tagId: 42 },
            { productId: 400, tagId: 30 },
            { productId: 36, tagId: 36 },
            { productId: 76, tagId: 47 },
            { productId: 446, tagId: 43 },
            { productId: 84, tagId: 50 },
            { productId: 74, tagId: 30 },
            { productId: 59, tagId: 40 },
            { productId: 44, tagId: 40 },
            { productId: 40, tagId: 33 },
            { productId: 65, tagId: 42 },
            { productId: 249, tagId: 41 },
            { productId: 102, tagId: 47 },
            { productId: 75, tagId: 37 },
            { productId: 221, tagId: 38 },
            { productId: 252, tagId: 30 },
            { productId: 310, tagId: 46 },
            { productId: 220, tagId: 31 },
            { productId: 352, tagId: 34 },
            { productId: 249, tagId: 52 },
            { productId: 339, tagId: 36 },
            { productId: 407, tagId: 41 },
            { productId: 182, tagId: 34 },
            { productId: 279, tagId: 49 },
            { productId: 215, tagId: 46 },
            { productId: 33, tagId: 48 },
            { productId: 97, tagId: 50 },
            { productId: 178, tagId: 33 },
            { productId: 124, tagId: 43 },
            { productId: 302, tagId: 47 },
            { productId: 286, tagId: 37 },
            { productId: 45, tagId: 30 },
            { productId: 311, tagId: 40 },
            { productId: 395, tagId: 47 },
            { productId: 312, tagId: 38 },
            { productId: 178, tagId: 35 },
            { productId: 402, tagId: 37 },
            { productId: 167, tagId: 33 },
            { productId: 381, tagId: 30 },
            { productId: 177, tagId: 35 },
            { productId: 146, tagId: 34 },
            { productId: 135, tagId: 36 },
            { productId: 111, tagId: 46 },
            { productId: 88, tagId: 35 },
            { productId: 311, tagId: 32 },
            { productId: 442, tagId: 43 },
            { productId: 297, tagId: 49 },
            { productId: 104, tagId: 30 },
            { productId: 131, tagId: 35 },
            { productId: 394, tagId: 38 },
            { productId: 263, tagId: 37 },
            { productId: 398, tagId: 31 },
            { productId: 67, tagId: 35 },
            { productId: 394, tagId: 44 },
            { productId: 207, tagId: 47 },
            { productId: 295, tagId: 33 },
            { productId: 30, tagId: 41 },
            { productId: 282, tagId: 45 },
            { productId: 172, tagId: 43 },
            { productId: 123, tagId: 32 },
            { productId: 385, tagId: 49 },
            { productId: 216, tagId: 45 },
            { productId: 107, tagId: 37 },
            { productId: 235, tagId: 52 },
            { productId: 295, tagId: 46 },
            { productId: 403, tagId: 41 },
            { productId: 333, tagId: 36 },
            { productId: 356, tagId: 46 },
            { productId: 277, tagId: 48 },
            { productId: 103, tagId: 44 },
            { productId: 291, tagId: 31 },
            { productId: 360, tagId: 41 },
            { productId: 154, tagId: 40 },
            { productId: 447, tagId: 48 },
            { productId: 99, tagId: 51 },
            { productId: 347, tagId: 34 },
            { productId: 382, tagId: 40 },
            { productId: 342, tagId: 34 },
            { productId: 344, tagId: 41 },
            { productId: 191, tagId: 37 },
            { productId: 224, tagId: 32 },
            { productId: 52, tagId: 39 },
            { productId: 290, tagId: 34 },
            { productId: 266, tagId: 32 },
            { productId: 55, tagId: 33 },
            { productId: 285, tagId: 34 },
            { productId: 237, tagId: 48 },
            { productId: 441, tagId: 35 },
            { productId: 123, tagId: 40 },
            { productId: 28, tagId: 33 },
            { productId: 402, tagId: 43 },
            { productId: 425, tagId: 40 },
            { productId: 35, tagId: 40 },
            { productId: 277, tagId: 49 },
            { productId: 236, tagId: 41 },
            { productId: 183, tagId: 33 },
            { productId: 54, tagId: 51 },
            { productId: 35, tagId: 42 },
            { productId: 158, tagId: 50 },
            { productId: 443, tagId: 42 },
            { productId: 239, tagId: 43 },
            { productId: 400, tagId: 38 },
            { productId: 255, tagId: 36 },
            { productId: 51, tagId: 34 },
            { productId: 34, tagId: 30 },
            { productId: 91, tagId: 38 },
            { productId: 328, tagId: 37 },
            { productId: 359, tagId: 35 },
            { productId: 120, tagId: 40 },
            { productId: 45, tagId: 30 },
            { productId: 330, tagId: 38 },
            { productId: 389, tagId: 38 },
            { productId: 265, tagId: 48 },
            { productId: 139, tagId: 31 },
            { productId: 4, tagId: 35 },
            { productId: 414, tagId: 39 },
            { productId: 171, tagId: 31 },
            { productId: 339, tagId: 31 },
            { productId: 259, tagId: 45 },
            { productId: 233, tagId: 52 },
            { productId: 74, tagId: 34 },
            { productId: 111, tagId: 40 },
            { productId: 236, tagId: 43 },
            { productId: 11, tagId: 37 },
            { productId: 292, tagId: 41 },
            { productId: 46, tagId: 44 },
            { productId: 90, tagId: 45 },
            { productId: 164, tagId: 35 },
            { productId: 246, tagId: 38 },
            { productId: 83, tagId: 38 },
            { productId: 405, tagId: 45 },
            { productId: 321, tagId: 50 },
            { productId: 138, tagId: 39 },
            { productId: 28, tagId: 37 },
            { productId: 253, tagId: 52 },
            { productId: 119, tagId: 45 },
            { productId: 7, tagId: 32 },
            { productId: 271, tagId: 50 },
            { productId: 175, tagId: 34 },
            { productId: 311, tagId: 50 },
            { productId: 382, tagId: 50 },
            { productId: 315, tagId: 37 },
            { productId: 356, tagId: 31 },
            { productId: 188, tagId: 31 },
            { productId: 373, tagId: 43 },
            { productId: 327, tagId: 33 },
            { productId: 317, tagId: 48 },
            { productId: 75, tagId: 36 },
            { productId: 136, tagId: 38 },
            { productId: 406, tagId: 49 },
            { productId: 430, tagId: 37 },
            { productId: 47, tagId: 33 },
            { productId: 432, tagId: 33 },
            { productId: 90, tagId: 44 },
            { productId: 127, tagId: 45 },
            { productId: 177, tagId: 40 },
            { productId: 372, tagId: 38 },
            { productId: 304, tagId: 30 },
            { productId: 186, tagId: 47 },
            { productId: 101, tagId: 41 },
            { productId: 190, tagId: 52 },
            { productId: 279, tagId: 42 },
            { productId: 293, tagId: 49 },
            { productId: 214, tagId: 46 },
            { productId: 236, tagId: 52 },
            { productId: 102, tagId: 51 },
            { productId: 280, tagId: 35 },
            { productId: 41, tagId: 39 },
            { productId: 441, tagId: 42 },
            { productId: 332, tagId: 33 },
            { productId: 226, tagId: 38 },
            { productId: 407, tagId: 48 },
            { productId: 322, tagId: 44 },
            { productId: 389, tagId: 46 },
            { productId: 157, tagId: 51 },
            { productId: 215, tagId: 42 },
            { productId: 398, tagId: 52 },
            { productId: 124, tagId: 43 },
            { productId: 197, tagId: 48 },
            { productId: 236, tagId: 32 },
            { productId: 424, tagId: 51 },
            { productId: 321, tagId: 36 },
            { productId: 390, tagId: 46 },
            { productId: 270, tagId: 37 },
            { productId: 346, tagId: 41 },
            { productId: 410, tagId: 37 },
            { productId: 424, tagId: 41 },
            { productId: 2, tagId: 44 },
            { productId: 55, tagId: 31 },
            { productId: 307, tagId: 35 },
            { productId: 450, tagId: 38 },
            { productId: 445, tagId: 35 },
            { productId: 239, tagId: 36 },
            { productId: 103, tagId: 40 },
            { productId: 325, tagId: 50 },
            { productId: 431, tagId: 48 },
            { productId: 221, tagId: 43 },
            { productId: 16, tagId: 46 },
            { productId: 129, tagId: 38 },
            { productId: 421, tagId: 44 },
            { productId: 34, tagId: 34 },
            { productId: 196, tagId: 37 },
            { productId: 37, tagId: 33 },
            { productId: 333, tagId: 34 },
            { productId: 145, tagId: 49 },
            { productId: 292, tagId: 33 },
            { productId: 3, tagId: 48 },
            { productId: 27, tagId: 32 },
            { productId: 450, tagId: 52 },
            { productId: 257, tagId: 46 },
            { productId: 265, tagId: 30 },
            { productId: 310, tagId: 39 },
            { productId: 12, tagId: 46 },
            { productId: 104, tagId: 42 },
            { productId: 42, tagId: 39 },
            { productId: 386, tagId: 42 },
            { productId: 198, tagId: 41 },
            { productId: 215, tagId: 35 },
            { productId: 127, tagId: 50 },
            { productId: 161, tagId: 52 },
            { productId: 138, tagId: 45 },
            { productId: 421, tagId: 30 },
            { productId: 117, tagId: 42 },
            { productId: 359, tagId: 31 },
            { productId: 334, tagId: 30 },
            { productId: 209, tagId: 51 },
            { productId: 100, tagId: 33 },
            { productId: 262, tagId: 33 },
            { productId: 223, tagId: 51 },
            { productId: 338, tagId: 30 },
            { productId: 136, tagId: 43 },
            { productId: 121, tagId: 48 },
            { productId: 115, tagId: 43 },
            { productId: 314, tagId: 35 },
            { productId: 71, tagId: 48 },
            { productId: 190, tagId: 50 },
            { productId: 89, tagId: 41 },
            { productId: 99, tagId: 50 },
            { productId: 186, tagId: 42 },
            { productId: 93, tagId: 52 },
            { productId: 46, tagId: 50 },
            { productId: 27, tagId: 35 },
            { productId: 147, tagId: 44 },
            { productId: 70, tagId: 31 },
            { productId: 271, tagId: 48 },
            { productId: 350, tagId: 50 },
            { productId: 300, tagId: 32 },
            { productId: 88, tagId: 47 },
            { productId: 316, tagId: 52 },
            { productId: 43, tagId: 31 },
            { productId: 156, tagId: 51 },
            { productId: 442, tagId: 51 },
            { productId: 450, tagId: 30 },
            { productId: 193, tagId: 43 },
            { productId: 391, tagId: 30 },
            { productId: 242, tagId: 48 },
            { productId: 287, tagId: 37 },
            { productId: 145, tagId: 34 },
            { productId: 356, tagId: 50 },
            { productId: 180, tagId: 52 },
            { productId: 50, tagId: 40 },
            { productId: 301, tagId: 41 },
            { productId: 187, tagId: 30 },
            { productId: 104, tagId: 37 },
            { productId: 279, tagId: 49 },
            { productId: 440, tagId: 43 },
            { productId: 131, tagId: 43 },
            { productId: 238, tagId: 36 },
            { productId: 387, tagId: 39 },
            { productId: 210, tagId: 34 },
            { productId: 320, tagId: 47 },
            { productId: 348, tagId: 49 },
            { productId: 148, tagId: 43 },
            { productId: 366, tagId: 44 },
            { productId: 447, tagId: 35 },
            { productId: 303, tagId: 46 },
            { productId: 246, tagId: 33 },
            { productId: 1, tagId: 51 },
            { productId: 7, tagId: 35 },
            { productId: 395, tagId: 33 },
            { productId: 129, tagId: 34 },
            { productId: 313, tagId: 31 },
            { productId: 401, tagId: 43 },
            { productId: 253, tagId: 51 },
            { productId: 338, tagId: 51 },
            { productId: 15, tagId: 45 },
            { productId: 336, tagId: 49 },
            { productId: 341, tagId: 51 },
            { productId: 78, tagId: 47 },
            { productId: 248, tagId: 34 },
            { productId: 311, tagId: 49 },
            { productId: 96, tagId: 51 },
            { productId: 28, tagId: 34 },
          ],
          {}
        );
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTags', null, {}).then(() => {
      return queryInterface.bulkDelete('Tags', null, { where: { id: { [Op.gt]: 29 } } });
    });
  },
};
