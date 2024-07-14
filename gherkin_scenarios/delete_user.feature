Feature: Delete a user
  Delete a user so that the user and their associated data are removed from the system

  Scenario: Successfully delete a user without houses
    Given user with id "2" exists
    When I send a DELETE request to "/users/2"
    Then the response status should be 204
    And user with id "2" should not exist

  Scenario: Fail to delete a user with existing houses
    Given user with id "1" exists
    When I send a DELETE request to "/users/1"
    Then the response status should be 400 
    And the response body should contain "User has houses, cannot delete"
    And user with id "1" should exist

  Scenario: Fail to delete a non-existing user
    When I send a DELETE request to "/users/3"
    Then the response status should be 404
    And the response body should contain "User not found"