require "test_helper"

class JokeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get joke_show_url
    assert_response :success
  end
end
