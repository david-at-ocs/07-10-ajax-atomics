require "sinatra"

get "/" do
  erb :"home"
end

get "/:msg" do
  erb :"message"
end