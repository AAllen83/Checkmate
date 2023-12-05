describe('Lets Play!', () => {
  it('page opens successfully', () => {
    cy.visit("/game/checkers/")
  });
  it('title validation', () => {
    cy.title().then((title)=>{
      cy.log(title);
      expect(title).to.be.eql("");
    });
  });
  //add assertion for "Select an orange piece to move." here
  it('get first piece', () => {
    cy.get('body').click(2,2);
  });
  it('make first move', () => {
    cy.get('body').click(3,3);
  });
  //add assertion for "Make a move." here
  it('get second piece', () => {
    cy.get('body').click(0,2);
  });
  it('make second move', () => {
    cy.get('body').click(1,3);
  });
  //add assertion for "Make a move." here
  it('get third piece', () => {
    cy.get('body').click(3,1);
  });
  it('jump blue piece', () => {
    cy.get('body').click(1,3);
  });
  //add assertion for "Make a move." here
  it('get fourth piece', () => {
    cy.get('body').click(1,1);
  });
  it('make fourth move', () => {
    cy.get('body').click(2,2);
  });
  //add assertion for "Make a move." here
  it('get fifth piece', () => {
    cy.get('body').click(6,2);
  });
  it('make first move', () => {
    cy.get('body').click(7,3);
  });
  //add assertion for "Make a move." here
  it('restart the game', () => {
    cy.get('body').click(64.91,17.6);
  });
  //add assertion for "Select an orange piece to move." here
});