import flipY from '../flipY';

describe('flipY', () => {
  it('should flip pixels vertically of all RGBA components for a [2,1] image', () => {
    let image = testUtils.createRgbaImage([[1, 2, 3, 4, 5, 6, 7, 8]]);

    let flipped = testUtils.createRgbaImage([[1, 2, 3, 4, 5, 6, 7, 8]]);

    const expected = flipY(image);
    expect(expected).toStrictEqual(flipped);
  });
  it('should flip pixels vertically of all RGBA components for a [2,2] image', () => {
    let image = testUtils.createRgbaImage([
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
    ]);

    let flipped = testUtils.createRgbaImage([
      [9, 10, 11, 12, 13, 14, 15, 16],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ]);
    const expected = flipY(image);
    expect(expected).toStrictEqual(flipped);
  });

  it('should flip pixels vertically of all RGBA components for a [3,2] image', () => {
    let image = testUtils.createRgbaImage([
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    ]);

    let flipped = testUtils.createRgbaImage([
      [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ]);

    const expected = flipY(image);
    expect(expected).toStrictEqual(flipped);
  });

  it('should flip pixels vertically of all RGBA components for a [2,3] image', () => {
    let image = testUtils.createRgbaImage([
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23, 24],
    ]);

    let flipped = testUtils.createRgbaImage([
      [17, 18, 19, 20, 21, 22, 23, 24],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ]);
    const expected = flipY(image);
    expect(expected).toStrictEqual(flipped);
  });

  it('should flip pixels vertically of GREY image', () => {
    let image = testUtils.createGreyImage([
      [1, 2],
      [3, 4],
    ]);

    let flipped = testUtils.createGreyImage([
      [3, 4],
      [1, 2],
    ]);
    const expected = flipY(image);
    expect(expected).toStrictEqual(flipped);
  });
});
