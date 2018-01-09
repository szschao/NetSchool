Feature:
  In order to keep my product stable
  As a developer or product manager
  I want to make sure that everything works as expected

  Scenario: Check title of website after search
    Given I open the url "https://www.baidu.com"
    Then I expect that the title is "百度一下，你就知道"