describe('Lets Play!', () => {
  it('title validation then play', () => {
    cy.visit("/game/checkers/")
    cy.title().then((title)=>{
      cy.log(title);
      expect(title).to.be.eql("Checkers - Games for the Brain");
      cy.get('[name="space22"]').click();
      cy.get('[name="space13"]').click().wait(1000); //1st move
        cy.get('[name="space42"]').click().wait(1000);
        cy.get('[name="space42"]').click().wait(1000);
        
        cy.get('[name="space53"]').click().wait(1000); //2nd move
          cy.get('[name="space13"]').click().wait(1000);
          cy.get('[name="space13"]').click().wait(1000);
          
          cy.get('[name="space04"]').click().wait(1000); //3rd move
            cy.get('[name="space31"]').click().wait(1000);
            cy.get('[name="space31"]').click().wait(1000);
            
            cy.get('[name="space22"]').click().wait(1000); //4th move
              cy.get('[name="space22"]').click().wait(1000);
              cy.get('[name="space22"]').click().wait(1000);
              
              cy.get('[name="space33"]').click().wait(1000); //5th move
                cy.get('[name="space02"]').click().wait(1000);
                cy.get('[name="space02"]').click().wait(1000);
                
                cy.get('[name="space24"]').click().wait(1000); //6th move
                  cy.get('[name="space62"]').click().wait(1000);
                  cy.get('[name="space62"]').click().wait(1000);
                  
                  cy.get('[name="space73"]').click().wait(1000); //7th move
                    cy.get('[name="space53"]').click().wait(1000);
                    cy.get('[name="space53"]').click().wait(1000);
                    
                    cy.get('[name="space44"]').click().wait(1000); //8th move
                      cy.get('[name="space24"]').click().wait(1000);
                      cy.get('[name="space24"]').click().wait(1000);
                      
                      cy.get('[name="space35"]').click().wait(1000); //9th move
                        cy.get('[name="space51"]').click().wait(1000);
                        cy.get('[name="space51"]').click().wait(1000);
                        
                        cy.get('[name="space62"]').click().wait(1000); //10th move
                          cy.get('[name="space11"]').click().wait(1000);
                          cy.get('[name="space11"]').click().wait(1000);
                          
                          cy.get('[name="space22"]').click().wait(1000); //11th move
                            cy.get('[name="space22"]').click().wait(1000);
                            cy.get('[name="space22"]').click().wait(1000);
                            
                            cy.get('[name="space13"]').click().wait(1000); //12th move
                              cy.get('[name="space35"]').click().wait(1000);
                              cy.get('[name="space35"]').click().wait(1000);
                              
                              cy.get('[name="space46"]').click().wait(1000); //13th move
                                cy.get('[name="space46"]').click().wait(1000);
                                cy.get('[name="space46"]').click().wait(1000);
                                
                                cy.get('[name="space57"]').click().wait(1000); //14th move
                                  cy.get('[name="space57"]').click().wait(1000);
                                  cy.get('[name="space57"]').click().wait(1000);
                                  cy.get('[name="space35"]').click().wait(1000);
                                  cy.get('[name="space17"]').click().wait(1000);
                                  
                                  cy.get('[name="space17"]').click().wait(1000); //15th move(Double Jump!)
                                    cy.get('[name="space13"]').click().wait(1000);
                                    cy.get('[name="space13"]').click().wait(1000);
                                    
                                    cy.get('[name="space35"]').click().wait(1000); //16th move
                                      cy.get('[name="space04"]').click().wait(1000);
                                      cy.get('[name="space04"]').click().wait(1000);
                                      
                                      cy.get('[name="space26"]').click().wait(1000); //17th move
                                        cy.get('[name="space26"]').click().wait(1000);
                                        cy.get('[name="space26"]').click().wait(1000);
                                        
                                        cy.get('[name="space37"]').click().wait(1000); //18th move
                                          cy.get('[name="space35"]').click().wait(1000);
                                          cy.get('[name="space35"]').click().wait(1000);
                                          
                                          cy.get('[name="space46"]').click().wait(1000); //19th move
                                            cy.get('[name="space46"]').click().wait(1000);
                                            cy.get('[name="space46"]').click().wait(1000);
                                            
                                            cy.get('[name="space57"]').click().wait(1000); //20th move
                                              cy.get('[name="space44"]').click().wait(1000);
                                              cy.get('[name="space44"]').click().wait(1000);
                                              
                                              cy.get('[name="space35"]').click().wait(1000); //21st move
                                                cy.get('[name="space33"]').click().wait(1000);
                                                cy.get('[name="space33"]').click().wait(1000);
                                                
                                                cy.get('[name="space24"]').click().wait(1000); //22nd move
                                                  cy.get('[name="space35"]').click().wait(1000);
                                                  cy.get('[name="space35"]').click().wait(1000);
                                                  
                                                  cy.get('[name="space26"]').click().wait(1000); //23rd move
                                                    cy.get('[name="space17"]').click().wait(1000);
                                                    cy.get('[name="space17"]').click().wait(1000);
                                                    
                                                    cy.get('[name="space06"]').click().wait(1000); //24th move
                                                      cy.get('[name="space26"]').click().wait(1000);
                                                      cy.get('[name="space26"]').click().wait(1000);
                                                      
                                                      cy.get('[name="space17"]').click().wait(1000); //25th move
                                                        cy.get('[name="space73"]').click().wait(1000);
                                                        cy.get('[name="space73"]').click().wait(1000);
                                                        
                                                        cy.get('[name="space55"]').click().wait(1000); //26th move
                                                         cy.get('[name="space62"]').click().wait(1000);
                                                         cy.get('[name="space62"]').click().wait(1000);
                                                         
                                                         cy.get('[name="space44"]').click().wait(1000); //27th move
                                                          cy.get('[name="space55"]').click().wait(1000);
                                                          cy.get('[name="space55"]').click().wait(1000);
                                                          
                                                          cy.get('[name="space77"]').click().wait(1000); //28th move
                                                            cy.get('[name="space77"]').click().wait(1000);
                                                            cy.get('[name="space77"]').click().wait(1000);
                                                            
                                                            cy.get('[name="space66"]').click().wait(1000); //29th move
                                                              cy.get('[name="space66"]').click().wait(1000);
                                                              cy.get('[name="space66"]').click().wait(1000);
                                                              
                                                              cy.get('[name="space75"]').click().wait(1000); //30th move
                                                                cy.get('[name="space44"]').click().wait(1000);
                                                                cy.get('[name="space44"]').click().wait(1000);
                                                                
                                                                cy.get('[name="space55"]').click().wait(1000); //31st move
                                                                  cy.get("#message").should(
                                                                  "have.text",
                                                                  "You have won!"
                                                                  );                                           //Assertion for message that you have won the game                  
    });
  }); 
});