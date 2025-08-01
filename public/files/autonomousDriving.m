%Our latest code except with a prototype dual-sensor straight-driving algorithm

global key

rightMotor = 'D';
leftMotor = 'B';
liftMotor = 'A';

threshold = 60;

%lets us input colors instead of numbers
colorMap = containers.Map({'red', 'yellow', 'green', 'blue'}, [5, 4, 3, 2]);          

%get destination color from user
prompt = "Enter First Destination Color: ";
colorName = input(prompt, 's');
targetColor = colorMap(colorName);
pause(1);

% This loop runs continuously.
while 1
   pause(.05);                           %trying to stop it from tweakin out
   touch = brick.TouchPressed(1);        % Read touch sensor from port 1.
   color = brick.ColorCode(4);           % Read color sensor from port 4.
   distance = brick.UltrasonicDist(3);   % Get distance from ultrasonic sensor on port 3.
   distance2 = brick.UltrasonicDist(2);  % Get secondary distance from ultrasonic on port 2.

   
   % Prototype Straight-Driving Algorithm Using 2 Ultrasonics
   if distance < threshold
      baseSpeed = 30;      % nominal straight speed
      desiredDist = 12;    % maintained distance
      sep = 8;             % seperation (cm) between the 2 ultrasonics
      dScaler = 4;         % lateral correction scaler
      tScaler = 8;         % angular correction scaler
  
      % Compute angle and distance to wall
      thetaErr = atan2((distance - distance2), sep);           % Robot's angle to the wall
      latDist = ((distance + distance2) / 2) * cos(thetaErr);  % Perpendicular dist to wall
      distErr = latDist - desiredDist;                         % Distance error

      rightSpeed = min(max(baseSpeed - (dScaler * distErr) - (tScaler * thetaErr), 0), 60);
      leftSpeed = min(max(baseSpeed + (dScaler * distErr) + (tScaler * thetaErr), 0), 60);
   
      fprintf('[Wall Following] D1: %.2f  |  D2: %.2f  |  θErr: %.2f rad  |  DistErr: %.2f\n', distance, distance2, thetaErr, distErr);
      fprintf('Left: %.1f  |  Right: %.1f\n\n', leftSpeed, rightSpeed);
      
      % Apply motor speeds
      brick.MoveMotor(rightMotor, rightSpeed); 
      brick.MoveMotor(leftMotor, leftSpeed); 
      pause(0.05);

   end
   
   % If the color sensed is red (code 5), stop, pause, then resume.
   if (color == 5)
      disp('pausing');
      brick.MoveMotor(leftMotor, 0);
      brick.MoveMotor(rightMotor, 0);
      pause(1);

      brick.MoveMotor(leftMotor, 30);
      brick.MoveMotor(rightMotor, 30);
      pause(0.5);

   end

   % If the touch sensor is triggered, back up, turn left, then move forward.
   if touch 
        pause(0.1); % debounce
        if brick.TouchPressed(1)
           disp('Turning Left');
           brick.StopAllMotors();
           pause(0.1);

           % Move backward.
           brick.MoveMotor(rightMotor, -25);
           brick.MoveMotor(leftMotor, -25);
           pause(1);

           % Turn left.
           brick.MoveMotor(rightMotor, 30);
           brick.MoveMotor(leftMotor, -20);
           pause(0.87);

           % Move forward.                                                                       %test if the left turns work without this
           brick.MoveMotor(rightMotor, 40);
           brick.MoveMotor(leftMotor, 40);
           % pause(1);  % You can adjust or uncomment if needed.
        end
   end

    %enter manual mode if we reach the target color
    if (color == targetColor)
      disp('Entering Manual Mode');
      %pause(.5);                                                                      %make sure that the robot crosses fully into the endzone
      
      %stop moving when starting manual mode
      brick.MoveMotor(rightMotor,0);
      brick.MoveMotor(leftMotor,0);
      InitKeyboard();

      while 1
          pause(0.05);
          switch key
              case 'uparrow'
                  disp('up arrow');
                  brick.MoveMotor(rightMotor,25);
                  brick.MoveMotor(leftMotor,25);
                  pause(.01);
                  
              case 'downarrow'
                  disp('down arrow');
                  brick.MoveMotor(rightMotor,-20);
                  brick.MoveMotor(leftMotor,-20);
                  pause(.01);
      
              case 'leftarrow'
                  disp('left arrow');
                  brick.MoveMotor(rightMotor,30);
                  brick.MoveMotor(leftMotor,-20);
                  pause(.01);
      
              case 'rightarrow'
                  disp('right arrow');
                  brick.MoveMotor(rightMotor,-20);
                  brick.MoveMotor(leftMotor,50);
                  pause(.01);
      
              case 's'
                  disp('lifting');
                  brick.MoveMotor(liftMotor,-15);
                  pause(.01);
      
              case 'w'
                  disp('lowering');
                  brick.MoveMotor(liftMotor,10);
                  pause(.01);
      
              case 'a'
                  disp('stopping motors');
                  brick.StopAllMotors();
      
              case 'q'
                  disp('quitting');
                  brick.MoveMotor(rightMotor, 0);
                  brick.MoveMotor(leftMotor, 0);
                  brick.MoveMotor(liftMotor, 0);
                  break;
                  
              %stops everything anytime no key is pressed
              otherwise       
                  disp('-');
                  brick.MoveMotor(rightMotor, 0);
                  brick.MoveMotor(leftMotor, 0);
                  brick.MoveMotor(liftMotor, 0);
          end          
      end
      
      prompt = "Enter Second Destination Color: ";
      colorName = input(prompt, 's');
      targetColor = colorMap(colorName);
      pause(0.3);
      
      %CloseKeyboard();                                                                    %should this be commented out?
    end

    %if the right wall is not detected while going straight
    if (distance >= threshold)
    disp('Turning Right');
        
        %move forward for 2 seconds while checking for red
        for i = 1:6
            brick.MoveMotor(rightMotor, 15);
            brick.MoveMotor(leftMotor, 15);
            pause(0.3);
                                                                                            
            color = brick.ColorCode(4);
            if color == 5  %if red
                disp('pausing');
                brick.MoveMotor(rightMotor, 0);
                brick.MoveMotor(leftMotor, 0);
                pause(1);
                
                brick.MoveMotor(leftMotor, 30);
                brick.MoveMotor(rightMotor, 30);
                pause(0.5);
            end
        end

        brick.MoveMotor(rightMotor,-20);
        brick.MoveMotor(leftMotor,30);
        pause(1);

        %move forward for 2 seconds while checking for red
        for i = 1:8
            brick.MoveMotor(rightMotor, 30);
            brick.MoveMotor(leftMotor, 30);
            pause(0.3);
                                                                                            
            color = brick.ColorCode(4);
            if color == 5  %if red
                disp('pausing');
                brick.MoveMotor(rightMotor, 0);
                brick.MoveMotor(leftMotor, 0);
                pause(1);
                
                brick.MoveMotor(leftMotor, 30);
                brick.MoveMotor(rightMotor, 30);
                pause(0.5);
            end
        end
        

        %if 90deg turn isn't enough, turn 90deg more (180 degree turn)
        distance = brick.UltrasonicDist(3); 
        if (distance >= threshold)
        disp('180 Degree Turn Detected');
          brick.MoveMotor(rightMotor,-20);
          brick.MoveMotor(leftMotor,30);
          pause(1);

        %move forward for 2 seconds while checking for red
        for i = 1:6
            brick.MoveMotor(rightMotor, 30);
            brick.MoveMotor(leftMotor, 30);
            pause(0.3);
                                                                                            
            color = brick.ColorCode(4);
            if color == 5  %if red
                disp('pausing');
                brick.MoveMotor(rightMotor, 0);
                brick.MoveMotor(leftMotor, 0);
                pause(1);
                
                brick.MoveMotor(leftMotor, 30);
                brick.MoveMotor(rightMotor, 30);
                pause(0.5);
            end
        end
        end
    end
end
